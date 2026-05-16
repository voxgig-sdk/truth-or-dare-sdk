# TruthOrDare SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class TruthOrDareContext
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = TruthOrDareHelpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = TruthOrDareHelpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = TruthOrDareControl.new
    ctrl_raw = TruthOrDareHelpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = TruthOrDareHelpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = TruthOrDareHelpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = TruthOrDareHelpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = TruthOrDareHelpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = TruthOrDareHelpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = TruthOrDareHelpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = TruthOrDareHelpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = TruthOrDareHelpers.to_map(TruthOrDareHelpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = TruthOrDareHelpers.to_map(TruthOrDareHelpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = TruthOrDareHelpers.to_map(TruthOrDareHelpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = TruthOrDareHelpers.to_map(TruthOrDareHelpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = TruthOrDareHelpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = TruthOrDareHelpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(TruthOrDareSpec) ? sp : basectx&.spec

    r = TruthOrDareHelpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(TruthOrDareResult) ? r : basectx&.result

    rp = TruthOrDareHelpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(TruthOrDareResponse) ? rp : basectx&.response

    opname = TruthOrDareHelpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    return @opmap[opname] if @opmap[opname]
    return TruthOrDareOperation.new({}) if opname.empty?

    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = TruthOrDareOperation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[opname] = op
    op
  end

  def make_error(code, msg)
    TruthOrDareError.new(code, msg, self)
  end
end
