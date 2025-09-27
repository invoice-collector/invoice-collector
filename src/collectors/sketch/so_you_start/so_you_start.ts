
import { SketchCollector } from '../../sketchCollector';

export class SoYouStartCollector extends SketchCollector {

    static CONFIG = {
        id: "so_you_start",
        name: "So you Start",
        description: "i18n.collectors.so_you_start.description",
        version: "0",
        website: "https://eu.soyoustart.com/manager/?lang=de_DE#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7663.jpg",
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
        entryUrl: "https://eu.soyoustart.com/manager/?lang=de_DE#/login",
    }

    constructor() {
        super(SoYouStartCollector.CONFIG);
    }
}
