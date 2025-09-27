
import { SketchCollector } from '../../sketchCollector';

export class WwwNicIoCollector extends SketchCollector {

    static CONFIG = {
        id: "www_nic_io",
        name: "www.nic.io",
        description: "i18n.collectors.www_nic_io.description",
        version: "0",
        website: "https://my.nic.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241840.jpg",
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
        entryUrl: "https://my.nic.io/",
    }

    constructor() {
        super(WwwNicIoCollector.CONFIG);
    }
}
