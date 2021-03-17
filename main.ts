input.onButtonPressed(Button.A, function () {
    pins.servoSetPulse(AnalogPin.P3, 2450)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoSetPulse(AnalogPin.P3, 1500)
})
input.onButtonPressed(Button.B, function () {
    pins.servoSetPulse(AnalogPin.P3, 700)
})
pins.servoWritePin(AnalogPin.P3, 90)
