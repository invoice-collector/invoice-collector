
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TbaytelCollector extends SketchCollector {

    static CONFIG = {
        id: "tbaytel",
        name: "TBayTel",
        description: "i18n.collectors.tbaytel.description",
        version: "0",
        website: "https://www.tbaytel.net/tbaytellogin?returnurl=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8631.jpg",
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
        entryUrl: "https://www.tbaytel.net/tbaytellogin?returnurl=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TbaytelCollector.CONFIG);
    }
}
