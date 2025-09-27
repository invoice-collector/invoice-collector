
import { SketchCollector } from '../../sketchCollector';

export class VevidaCollector extends SketchCollector {

    static CONFIG = {
        id: "vevida",
        name: "Vevida",
        description: "i18n.collectors.vevida.description",
        version: "0",
        website: "https://my.vevida.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32708.jpg",
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
        entryUrl: "https://my.vevida.com/login",
    }

    constructor() {
        super(VevidaCollector.CONFIG);
    }
}
