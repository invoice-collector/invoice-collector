
import { SketchCollector } from '../../sketchCollector';

export class DeviceMagicCollector extends SketchCollector {

    static CONFIG = {
        id: "device_magic",
        name: "Device Magic",
        description: "i18n.collectors.device_magic.description",
        version: "0",
        website: "https://www.devicemagic.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83348.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.devicemagic.com/users/login",
    }

    constructor() {
        super(DeviceMagicCollector.CONFIG);
    }
}
