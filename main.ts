maqueen.IR_callbackUser(function (message) {
    if (message == 24) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
    if (message == 82) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
    if (message == 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 90) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
    }
    if (message == 28) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 66) {
        S = S + 3
        maqueen.servoRun(maqueen.Servos.S1, S)
    }
    if (message == 74) {
        S = S - 3
        maqueen.servoRun(maqueen.Servos.S1, S)
    }
})
let S = 0
S = 90
maqueen.servoRun(maqueen.Servos.S1, S)
S = 110
maqueen.servoRun(maqueen.Servos.S2, S)
