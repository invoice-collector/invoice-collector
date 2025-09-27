
import { SketchCollector } from '../../sketchCollector';

export class XxxlutzCollector extends SketchCollector {

    static CONFIG = {
        id: "xxxlutz",
        name: "XXXLUTZ",
        description: "i18n.collectors.xxxlutz.description",
        version: "0",
        website: "https://www.xxxlutz.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35788.jpg",
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
        entryUrl: "https://www.xxxlutz.de/",
    }

    constructor() {
        super(XxxlutzCollector.CONFIG);
    }
}
