
import { SketchCollector } from '../../sketchCollector';

export class HandlerschutzCollector extends SketchCollector {

    static CONFIG = {
        id: "handlerschutz",
        name: "Handlerschutz",
        description: "i18n.collectors.handlerschutz.description",
        version: "0",
        website: "https://www.haendlerschutz.com/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32796.jpg",
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
        entryUrl: "https://www.haendlerschutz.com/login.html",
    }

    constructor() {
        super(HandlerschutzCollector.CONFIG);
    }
}
