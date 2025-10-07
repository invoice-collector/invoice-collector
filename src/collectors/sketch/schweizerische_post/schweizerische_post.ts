
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchweizerischePostCollector extends SketchCollector {

    static CONFIG = {
        id: "schweizerische_post",
        name: "Schweizerische Post",
        description: "i18n.collectors.schweizerische_post.description",
        version: "0",
        website: "https://service.post.ch/kurepoweb/main/ui/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2246682.jpg",
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
        entryUrl: "https://service.post.ch/kurepoweb/main/ui/bills",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchweizerischePostCollector.CONFIG);
    }
}
