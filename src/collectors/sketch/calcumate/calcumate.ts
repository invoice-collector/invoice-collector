
import { SketchCollector } from '../../sketchCollector';

export class CalcumateCollector extends SketchCollector {

    static CONFIG = {
        id: "calcumate",
        name: "Calcumate",
        description: "i18n.collectors.calcumate.description",
        version: "0",
        website: "https://calcumate.co/admin/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564852.jpg",
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
        entryUrl: "https://calcumate.co/admin/my-account",
    }

    constructor() {
        super(CalcumateCollector.CONFIG);
    }
}
