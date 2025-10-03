
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WhatrunswhereCollector extends SketchCollector {

    static CONFIG = {
        id: "whatrunswhere",
        name: "WhatRunsWhere",
        description: "i18n.collectors.whatrunswhere.description",
        version: "0",
        website: "https://app.whatrunswhere.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7050.jpg",
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
        entryUrl: "https://app.whatrunswhere.com/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhatrunswhereCollector.CONFIG);
    }
}
