
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EskerCollector extends SketchCollector {

    static CONFIG = {
        id: "esker",
        name: "Esker",
        description: "i18n.collectors.esker.description",
        version: "0",
        website: "https://as1.ondemand.esker.com/ondemand/webaccess/logon.aspx?lang=en&TestCookie=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10676.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://as1.ondemand.esker.com/ondemand/webaccess/logon.aspx?lang=en&TestCookie=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EskerCollector.CONFIG);
    }
}
