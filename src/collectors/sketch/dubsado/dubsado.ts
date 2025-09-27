
import { SketchCollector } from '../../sketchCollector';

export class DubsadoCollector extends SketchCollector {

    static CONFIG = {
        id: "dubsado",
        name: "dubsado",
        description: "i18n.collectors.dubsado.description",
        version: "0",
        website: "https://hello.dubsado.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/902157.jpg",
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
        entryUrl: "https://hello.dubsado.com/user/login",
    }

    constructor() {
        super(DubsadoCollector.CONFIG);
    }
}
