
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EpubliCollector extends SketchCollector {

    static CONFIG = {
        id: "epubli",
        name: "epubli",
        description: "i18n.collectors.epubli.description",
        version: "0",
        website: "https://www.epubli.de/myaccount/statistics/receipt/2019/01?p=211449",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111490.jpg",
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
        entryUrl: "https://www.epubli.de/myaccount/statistics/receipt/2019/01?p=211449",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EpubliCollector.CONFIG);
    }
}
