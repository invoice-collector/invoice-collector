
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BattlenetEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "battlenet_europe",
        name: "BattleNet - Europe",
        description: "i18n.collectors.battlenet_europe.description",
        version: "0",
        website: "https://eu.battle.net/login/en/?ref=https://eu.battle.net/forums/en/&app=com-forums",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116129.jpg",
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
        entryUrl: "https://eu.battle.net/login/en/?ref=https://eu.battle.net/forums/en/&app=com-forums",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BattlenetEuropeCollector.CONFIG);
    }
}
