namespace maxBot {
    const speakerPin = AnalogPin.P0;
    const trigPin = DigitalPin.P1, echoPin = DigitalPin.P2;
    const leftMotor = AnalogPin.P8, rightMotor = AnalogPin.P12;
    const leftButton = DigitalPin.P16, rightButton = DigitalPin.P13;
    const leftLightSensor = DigitalPin.P15, rightLightSensor = DigitalPin.P14;
    let leftStrip = neopixel.create(DigitalPin.P5, 10, NeoPixelMode.RGB);
    let rightStrip = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB);

    /**
     * Function to set the speed of both motors.
     */
    //% blockID=maxbotSetWheels
    //% block="max:bot set left : $leftWheel right : $rightWheel"
    //% leftWheel.min=-90 leftWheel.max=90 rightWheel.min=-90 rightWheel.max=90
    export function setWheelSpeeds(leftWheel : number, rightWheel : number) : void {
        leftWheel |= 0; 
        rightWheel |= 0;
        Math.constrain(leftWheel, -90, 90);
        Math.constrain(leftWheel, -90, 90);
        pins.servoWritePin(leftMotor, 90 + leftWheel);
        pins.servoWritePin(rightMotor, 90 + rightWheel);
    }
    
    /**
     * Stops the max:bot. Sets both motors to 0 speed.
     */
    //% blockID=maxbotStop
    //% block="max:bot stop"
    export function stop() : void {
        pins.servoWritePin(leftMotor, 90);
        pins.servoWritePin(rightMotor, 90);
    }

    /**
     * Make max:bot move forward at a set speed
     */
    //% blockID=maxbotForwardSpeed
    //% block="max:bot forward at $speed"
    //% speed.min=1 speed.max=90
    export function forward(speed : number) : void {
        speed |= 0;
        Math.constrain(speed, 0, 90);
        pins.servoWritePin(leftMotor, 90+speed);
        pins.servoWritePin(rightMotor, 90+speed);
    }

    /**
     * Make max:bot move backward at a set speed
     */
    //% blockID=maxbotBackwardSpeed
    //% block="max:bot reverse at $speed"
    //% speed.min=1 speed.max=90
    export function backward(speed: number): void {
        speed |= 0;
        Math.constrain(speed, 0, 90);
        pins.servoWritePin(leftMotor, 90 - speed);
        pins.servoWritePin(rightMotor, 90 - speed);
    }

    /**
     * Make max:bot turn left at a set speed
     */
    //% blockID=maxbotLeftSpeed
    //% block="max:bot turn left at $speed"
    //% speed.min=1 speed.max=90
    export function turnLeft(speed : number) : void {
        speed |= 0;
        Math.constrain(speed, 0, 90);
        pins.servoWritePin(leftMotor, 90 - speed);
        pins.servoWritePin(rightMotor, 90 + speed);
    }

    /**
     * Make max:bot turn right at a set speed
     */
    //% blockID=maxbotRightSpeed
    //% block="max:bot turn right at $speed"
    //% speed.min=1 speed.max=90
    export function turnRight(speed: number) : void {
        speed |= 0;
        Math.constrain(speed, 0, 90);
        pins.servoWritePin(leftMotor, 90 + speed);
        pins.servoWritePin(rightMotor, 90 - speed);
    }

    /**
     * Set max:bot left wheel speed
     */
    //% blockID=maxbotLeftWheelSpeed
    //% block="max:bot set left wheel to $speed"
    //% speed.min=-90 speed.max=90
    export function setLeftWheelSpeed(speed:number) : void {
        speed |= 0;
        Math.constrain(speed, 0, 90);
        pins.servoWritePin(leftMotor, 90+speed);
    }
    
    /**
     * Set max:bot right wheel speed
     */
    //% blockID=maxbotRightWheelSpeed
    //% block="max:bot set right wheel to $speed"
    //% speed.min=-90 speed.max=90
    export function setRightWheelSpeed(speed: number): void {
        speed |= 0;
        Math.constrain(speed, 0, 90);
        pins.servoWritePin(rightMotor, 90+speed);
    }

    /**
     * Get left strip on max:bot
     */
    //% blockID=maxbotGetLeftStrip
    //% block="max:bot left strip"
    export function getLeftStrip() : neopixel.Strip{
        return leftStrip;
    }
    
    /**
     * Get right strip on max:bot
     */
    //% blockID=maxbotGetRightStrip
    //% block="max:bot right strip"
    export function getRightStrip(): neopixel.Strip {
        return rightStrip;
    }

    /**
     * Returns if the left button is pushed or not
     */
    //% blockID=maxbotLeftButtonPushed
    //% block="max:bot is left button pushed?"
    export function isLeftButtonPushed () : boolean {
        return pins.digitalReadPin(leftButton) == 1;
    }

    /**
     * Returns if the right button is pushed or not
     */
    //% blockID=maxbotLeftButtonPushed
    //% block="max:bot is right button pushed?"
    export function isRightButtonPushed(): boolean {
        return pins.digitalReadPin(rightButton) == 1;
    }

    /**
     * Returns if the left light sensor detects light
     */
    //% blockID=maxbotLeftLightSensorLight
    //% block="max:bot left light sensor detects light?"
    export function leftLightSensorLight() : boolean {
        return pins.digitalReadPin(leftLightSensor) == 0;
    }

    /**
     * Returns if the right light sensor detects light
     */
    //% blockID=maxbotRightLightSensorLight
    //% block="max:bot right light sensor detects light?"
    export function rightLightSensorLight(): boolean {
        return pins.digitalReadPin(rightLightSensor) == 0;
    }

    /**
     * Returns distance sensed by ultrasonic sensor in centimeters
     */
    //% blockID=maxbotUltrasonicSensor
    //% block="max:bot ultrasonic sensor distance"
    export function ultrasonicDistance(): number {
        return sonar.ping(trigPin, echoPin, PingUnit.Centimeters);
    }
}
