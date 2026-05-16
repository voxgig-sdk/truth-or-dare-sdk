package core

type TruthOrDareError struct {
	IsTruthOrDareError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTruthOrDareError(code string, msg string, ctx *Context) *TruthOrDareError {
	return &TruthOrDareError{
		IsTruthOrDareError: true,
		Sdk:              "TruthOrDare",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TruthOrDareError) Error() string {
	return e.Msg
}
