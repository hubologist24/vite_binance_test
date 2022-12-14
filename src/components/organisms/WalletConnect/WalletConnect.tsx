import { Button, Group, Text } from "@mantine/core"
import { Goerli, useEthers, BSC } from "@usedapp/core"

export const WalletConnect = () => {
    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()
    if (account) {
        if (chainId === BSC.chainId) {
            return (<Button onClick={deactivate}>Disconnect</Button>)
        }
        else {
            return (
                <Group position="right">
                    <Text color="red">Hatalı Network</Text>
                    <Button onClick={() => switchNetwork(BSC.chainId)}>Switch Network</Button>
                </Group>
            )
        }
    } else {
        return (<Button onClick={activateBrowserWallet}>Metamask Bağlan</Button>)
    }
}