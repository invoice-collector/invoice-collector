
import { SketchCollector } from '../../sketchCollector';

export class ShiftbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "shiftbase",
        name: "shiftbase",
        description: "i18n.collectors.shiftbase.description",
        version: "0",
        website: "https://app.shiftbase.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1266379.jpg",
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
        entryUrl: "https://app.shiftbase.com/login",
    }

    constructor() {
        super(ShiftbaseCollector.CONFIG);
    }
}
