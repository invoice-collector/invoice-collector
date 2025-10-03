
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AssonaPartnerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "assona_partnerportal",
        name: "assona Partnerportal",
        description: "i18n.collectors.assona_partnerportal.description",
        version: "0",
        website: "https://partnerportal.assona.com/pos/index.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50009.jpg",
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
        entryUrl: "https://partnerportal.assona.com/pos/index.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AssonaPartnerportalCollector.CONFIG);
    }
}
