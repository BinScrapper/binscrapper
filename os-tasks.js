import { execSync } from "child_process";
import { platformComands, platforms } from "./platform-comands.js"

const { screen } = platformComands.platform[platformComands.os]

const dimensionsValues = () => {
    const isLinux = platformComands.os === platforms.linux

    if (isLinux) {
        return execSync(screen).toString().split('\n')[0].split('x')
    }

    const outputCommand = execSync(screen).toString()
    const dimensions = outputCommand.split('\n')[1].split(' ').filter(value => value !== '')
    return [[parseInt(dimensions[0]), parseInt(dimensions[1])]]
}

const dimensionsArray = dimensionsValues()

export const dimensions = {
    width: dimensionsArray[0],
    height: dimensionsArray[1]
}



