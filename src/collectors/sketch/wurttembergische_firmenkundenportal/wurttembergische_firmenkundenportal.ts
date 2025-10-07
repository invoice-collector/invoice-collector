
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WurttembergischeFirmenkundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "wurttembergische_firmenkundenportal",
        name: "Wurttembergische Firmenkundenportal",
        description: "i18n.collectors.wurttembergische_firmenkundenportal.description",
        version: "0",
        website: "https://kundenportal.ww-ag.de/service/meine-wuerttembergische/app/B2CFW_/_mWuyN6GtjxMU8e2MltTgKDxOTSkp7ZE-KZxDEQeD14*/!STANDARD?state=1f6fa06048c0565e7eee8b34c7d18e12&session_state=ce569449-3e9d-4721-84f0-78f397c55598&code=7e0b8656-de70-4ed4-a3dc-98cd8abe",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1252839.jpg",
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
        entryUrl: "https://kundenportal.ww-ag.de/service/meine-wuerttembergische/app/B2CFW_/_mWuyN6GtjxMU8e2MltTgKDxOTSkp7ZE-KZxDEQeD14*/!STANDARD?state=1f6fa06048c0565e7eee8b34c7d18e12&session_state=ce569449-3e9d-4721-84f0-78f397c55598&code=7e0b8656-de70-4ed4-a3dc-98cd8abe",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WurttembergischeFirmenkundenportalCollector.CONFIG);
    }
}
