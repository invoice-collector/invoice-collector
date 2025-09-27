
import { SketchCollector } from '../../sketchCollector';

export class HostmonsterCollector extends SketchCollector {

    static CONFIG = {
        id: "hostmonster",
        name: "HostMonster",
        description: "i18n.collectors.hostmonster.description",
        version: "0",
        website: "https://my.hostmonster.com/web-hosting/cplogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9494.jpg",
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
        entryUrl: "https://my.hostmonster.com/web-hosting/cplogin",
    }

    constructor() {
        super(HostmonsterCollector.CONFIG);
    }
}
