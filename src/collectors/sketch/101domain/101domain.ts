
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _101domainCollector extends SketchCollector {

    static CONFIG = {
        id: "101domain",
        name: "101domain",
        description: "i18n.collectors.101domain.description",
        version: "0",
        website: "https://my.101domain.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58987.jpg",
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
        entryUrl: "https://my.101domain.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_101domainCollector.CONFIG);
    }
}
