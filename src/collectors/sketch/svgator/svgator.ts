
import { SketchCollector } from '../../sketchCollector';

export class SvgatorCollector extends SketchCollector {

    static CONFIG = {
        id: "svgator",
        name: "svgator",
        description: "i18n.collectors.svgator.description",
        version: "0",
        website: "https://app.svgator.com/account#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1223997.jpg",
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
        entryUrl: "https://app.svgator.com/account#/invoices",
    }

    constructor() {
        super(SvgatorCollector.CONFIG);
    }
}
