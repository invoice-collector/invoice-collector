
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GksHandelssystemeCollector extends SketchCollector {

    static CONFIG = {
        id: "gks_handelssysteme",
        name: "GKS Handelssysteme",
        description: "i18n.collectors.gks_handelssysteme.description",
        version: "0",
        website: "http://www.gksgmbh.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32694.jpg",
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
        entryUrl: "http://www.gksgmbh.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GksHandelssystemeCollector.CONFIG);
    }
}
