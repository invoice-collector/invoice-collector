
import { SketchCollector } from '../../sketchCollector';

export class YoufoneNlCollector extends SketchCollector {

    static CONFIG = {
        id: "youfone_nl",
        name: "Youfone.nl",
        description: "i18n.collectors.youfone_nl.description",
        version: "0",
        website: "https://my.youfone.nl/Login?ReturnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9555.jpg",
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
        entryUrl: "https://my.youfone.nl/Login?ReturnUrl=%2F",
    }

    constructor() {
        super(YoufoneNlCollector.CONFIG);
    }
}
