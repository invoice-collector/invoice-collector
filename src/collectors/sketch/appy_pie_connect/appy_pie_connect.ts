
import { SketchCollector } from '../../sketchCollector';

export class AppyPieConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "appy_pie_connect",
        name: "Appy Pie Connect",
        description: "i18n.collectors.appy_pie_connect.description",
        version: "0",
        website: "https://connectappypie.com/app/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172957.jpg",
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
        entryUrl: "https://connectappypie.com/app/billing",
    }

    constructor() {
        super(AppyPieConnectCollector.CONFIG);
    }
}
