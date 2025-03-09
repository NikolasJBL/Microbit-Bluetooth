/**
 * Bluetooth Initialization Extension
 */
//% weight=100 color=#0fbc11 icon=""
namespace bluetoothInit {
    /**
     * Initializes Bluetooth for discoverability.
     */
    //% block="initialize Bluetooth"
    export function initBluetooth(): void {
        bluetooth.setTransmitPower(7);
        bluetooth.advertiseUid(0xFEAA, 0xFEAA, 0xFEAA);
        bluetooth.advertiseUrl("", "", 0);
    }

    /**
     * Runs code when Bluetooth is connected.
     */
    //% block="on Bluetooth connected"
    export function onBluetoothConnected(handler: () => void): void {
        bluetooth.onBluetoothConnected(handler);
    }

    /**
     * Runs code when Bluetooth is disconnected.
     */
    //% block="on Bluetooth disconnected"
    export function onBluetoothDisconnected(handler: () => void): void {
        bluetooth.onBluetoothDisconnected(handler);
    }
}
