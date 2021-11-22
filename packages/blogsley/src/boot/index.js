import config from '../config'

import boot_apollo from './apollo'

import boot_blogsley from './blogsley'

export default async (app, options={}) => {
    config()
    await boot_apollo(app, options)
    await boot_blogsley(app, options)
}