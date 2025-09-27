
import { SketchCollector } from '../../sketchCollector';

export class MotionmailCollector extends SketchCollector {

    static CONFIG = {
        id: "motionmail",
        name: "MotionMail",
        description: "i18n.collectors.motionmail.description",
        version: "0",
        website: "https://motionmailapp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11263.jpg",
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
        entryUrl: "https://motionmailapp.com/login",
    }

    constructor() {
        super(MotionmailCollector.CONFIG);
    }
}
