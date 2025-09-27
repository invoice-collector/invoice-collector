
import { SketchCollector } from '../../sketchCollector';

export class GetidaCollector extends SketchCollector {

    static CONFIG = {
        id: "getida",
        name: "Getida",
        description: "i18n.collectors.getida.description",
        version: "0",
        website: "http://www.getida.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/782716.jpg",
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
        entryUrl: "http://www.getida.com",
    }

    constructor() {
        super(GetidaCollector.CONFIG);
    }
}
