
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonServicePublicCollector extends SketchCollector {

    static CONFIG = {
        id: "mon_service_public",
        name: "Mon Service Public",
        description: "i18n.collectors.mon_service_public.description",
        version: "0",
        website: "https://www.service-public.fr/compte/se-connecter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105813.jpg",
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
        entryUrl: "https://www.service-public.fr/compte/se-connecter",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonServicePublicCollector.CONFIG);
    }
}
