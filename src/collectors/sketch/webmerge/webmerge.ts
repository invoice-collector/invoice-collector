
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebmergeCollector extends SketchCollector {

    static CONFIG = {
        id: "webmerge",
        name: "WebMerge",
        description: "i18n.collectors.webmerge.description",
        version: "0",
        website: "https://www.webmerge.me/manage/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18543.jpg",
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
        entryUrl: "https://www.webmerge.me/manage/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebmergeCollector.CONFIG);
    }
}
