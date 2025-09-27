
import { SketchCollector } from '../../sketchCollector';

export class MeetupcallCollector extends SketchCollector {

    static CONFIG = {
        id: "meetupcall",
        name: "Meetupcall",
        description: "i18n.collectors.meetupcall.description",
        version: "0",
        website: "https://manage.meetupcall.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8756.jpg",
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
        entryUrl: "https://manage.meetupcall.com/login",
    }

    constructor() {
        super(MeetupcallCollector.CONFIG);
    }
}
