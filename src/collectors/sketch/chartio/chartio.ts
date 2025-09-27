
import { SketchCollector } from '../../sketchCollector';

export class ChartioCollector extends SketchCollector {

    static CONFIG = {
        id: "chartio",
        name: "Chartio",
        description: "i18n.collectors.chartio.description",
        version: "0",
        website: "https://chartio.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49393.jpg",
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
        entryUrl: "https://chartio.com/login/",
    }

    constructor() {
        super(ChartioCollector.CONFIG);
    }
}
