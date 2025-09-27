
import { SketchCollector } from '../../sketchCollector';

export class SplineCollector extends SketchCollector {

    static CONFIG = {
        id: "spline",
        name: "Spline",
        description: "i18n.collectors.spline.description",
        version: "0",
        website: "https://app.spline.design/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120064.jpg",
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
        entryUrl: "https://app.spline.design/account",
    }

    constructor() {
        super(SplineCollector.CONFIG);
    }
}
