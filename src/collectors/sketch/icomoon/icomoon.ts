
import { SketchCollector } from '../../sketchCollector';

export class IcomoonCollector extends SketchCollector {

    static CONFIG = {
        id: "icomoon",
        name: "icomoon",
        description: "i18n.collectors.icomoon.description",
        version: "0",
        website: "https://icomoon.io/#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773307.jpg",
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
        entryUrl: "https://icomoon.io/#login",
    }

    constructor() {
        super(IcomoonCollector.CONFIG);
    }
}
