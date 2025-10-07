
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeslibrairesCollector extends SketchCollector {

    static CONFIG = {
        id: "leslibraires",
        name: "leslibraires",
        description: "i18n.collectors.leslibraires.description",
        version: "0",
        website: "https://www.leslibraires.fr/pc/account/customer/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409694.jpg",
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
        entryUrl: "https://www.leslibraires.fr/pc/account/customer/invoice/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeslibrairesCollector.CONFIG);
    }
}
