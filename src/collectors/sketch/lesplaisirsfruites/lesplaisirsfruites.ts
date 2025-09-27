
import { SketchCollector } from '../../sketchCollector';

export class LesplaisirsfruitesCollector extends SketchCollector {

    static CONFIG = {
        id: "lesplaisirsfruites",
        name: "Lesplaisirsfruites",
        description: "i18n.collectors.lesplaisirsfruites.description",
        version: "0",
        website: "https://app.lesplaisirsfruites.com/myInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4397099.jpg",
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
        entryUrl: "https://app.lesplaisirsfruites.com/myInvoices",
    }

    constructor() {
        super(LesplaisirsfruitesCollector.CONFIG);
    }
}
