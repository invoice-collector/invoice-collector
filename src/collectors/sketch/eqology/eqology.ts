
import { SketchCollector } from '../../sketchCollector';

export class EqologyCollector extends SketchCollector {

    static CONFIG = {
        id: "eqology",
        name: "Eqology",
        description: "i18n.collectors.eqology.description",
        version: "0",
        website: "https://biz.eqology.com/?do=payoutsreport&section=bonusdata&lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2765218.jpg",
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
        entryUrl: "https://biz.eqology.com/?do=payoutsreport&section=bonusdata&lang=de",
    }

    constructor() {
        super(EqologyCollector.CONFIG);
    }
}
