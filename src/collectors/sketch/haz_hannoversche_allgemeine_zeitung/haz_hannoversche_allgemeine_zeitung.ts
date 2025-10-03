
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HazHannoverscheAllgemeineZeitungCollector extends SketchCollector {

    static CONFIG = {
        id: "haz_hannoversche_allgemeine_zeitung",
        name: "HAZ (Hannoversche Allgemeine Zeitung)",
        description: "i18n.collectors.haz_hannoversche_allgemeine_zeitung.description",
        version: "0",
        website: "https://account.rnd.de/v4/hub/sso/login?client_id=madsack-haznp-haz-portal-one-web&redirect_uri=https%3A%2F%2Fwww.haz.de&response_type=code&code_challenge=ARe1x8QWQ3-Z0dH1QeNRZSwinM9IfkrSXUTJ3MPKgVc&code_challenge_method=S256&state=https%3A%2F%2Fwww.haz.d",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1222404.jpg",
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
        entryUrl: "https://account.rnd.de/v4/hub/sso/login?client_id=madsack-haznp-haz-portal-one-web&redirect_uri=https%3A%2F%2Fwww.haz.de&response_type=code&code_challenge=ARe1x8QWQ3-Z0dH1QeNRZSwinM9IfkrSXUTJ3MPKgVc&code_challenge_method=S256&state=https%3A%2F%2Fwww.haz.d",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HazHannoverscheAllgemeineZeitungCollector.CONFIG);
    }
}
