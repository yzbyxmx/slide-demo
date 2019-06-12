import {
  getDeviceRatio
} from "./common";

export var DEVICE_RATIO = getDeviceRatio();

export const DOWN_CONFIG = {

  threshold:40*DEVICE_RATIO,
  stop:20*DEVICE_RATIO

}
/*上拉配置*/
export const UP_CONFIG = {

  threshold:-40*DEVICE_RATIO,

}
