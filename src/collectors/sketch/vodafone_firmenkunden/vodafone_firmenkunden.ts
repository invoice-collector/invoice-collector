
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneFirmenkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_firmenkunden",
        name: "Vodafone Firmenkunden",
        description: "i18n.collectors.vodafone_firmenkunden.description",
        version: "0",
        website: "https://www.vodafone.de/business/services/firmenkundenportal/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3100102.jpg",
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
        entryUrl: "https://www.vodafone.de/business/services/firmenkundenportal/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VodafoneFirmenkundenCollector.CONFIG);
    }
}
