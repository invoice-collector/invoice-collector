
import { SketchCollector } from '../../sketchCollector';

export class SplashtopCollector extends SketchCollector {

    static CONFIG = {
        id: "splashtop",
        name: "Splashtop",
        description: "i18n.collectors.splashtop.description",
        version: "0",
        website: "https://my.splashtop.eu/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1091357.jpg",
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
        entryUrl: "https://my.splashtop.eu/login",
    }

    constructor() {
        super(SplashtopCollector.CONFIG);
    }
}
