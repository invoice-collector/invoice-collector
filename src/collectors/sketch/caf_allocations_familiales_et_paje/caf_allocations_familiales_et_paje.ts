
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CafAllocationsFamilialesEtPajeCollector extends SketchCollector {

    static CONFIG = {
        id: "caf_allocations_familiales_et_paje",
        name: "CAF (Allocations familiales et PAJE)",
        description: "i18n.collectors.caf_allocations_familiales_et_paje.description",
        version: "0",
        website: "https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JjgpR-VnpOfBHZNpGNekrFFun5UUWpaalFqkV5pEVA4o6SkoNhK1UDVoLy8XC85MU0vrUjVAJvyjPziEv0IhCr9gtwIA92opMpyR0VFAE_8qVE!/dl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105270.jpg",
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
        entryUrl: "https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JjgpR-VnpOfBHZNpGNekrFFun5UUWpaalFqkV5pEVA4o6SkoNhK1UDVoLy8XC85MU0vrUjVAJvyjPziEv0IhCr9gtwIA92opMpyR0VFAE_8qVE!/dl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CafAllocationsFamilialesEtPajeCollector.CONFIG);
    }
}
