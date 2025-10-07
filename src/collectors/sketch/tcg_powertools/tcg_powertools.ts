
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TcgPowertoolsCollector extends SketchCollector {

    static CONFIG = {
        id: "tcg_powertools",
        name: "TCG PowerTools",
        description: "i18n.collectors.tcg_powertools.description",
        version: "0",
        website: "https://app.tcgpowertools.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1186020.jpg",
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
        entryUrl: "https://app.tcgpowertools.com/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TcgPowertoolsCollector.CONFIG);
    }
}
