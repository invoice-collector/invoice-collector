
import { SketchCollector } from '../../sketchCollector';

export class PicTimeCollector extends SketchCollector {

    static CONFIG = {
        id: "pic_time",
        name: "PIC-TIME",
        description: "i18n.collectors.pic_time.description",
        version: "0",
        website: "https://us.pic-time.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/990482.jpg",
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
        entryUrl: "https://us.pic-time.com/login",
    }

    constructor() {
        super(PicTimeCollector.CONFIG);
    }
}
