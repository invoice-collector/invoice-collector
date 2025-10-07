
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PageflowCollector extends SketchCollector {

    static CONFIG = {
        id: "pageflow",
        name: "Pageflow",
        description: "i18n.collectors.pageflow.description",
        version: "0",
        website: "https://creator.hosted-pageflow.com/admin/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15361.jpg",
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
        entryUrl: "https://creator.hosted-pageflow.com/admin/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PageflowCollector.CONFIG);
    }
}
