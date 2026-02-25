---
title: Quick Start
description: "Get up and running with Minions Bundle: Execution in minutes"
---

## TypeScript

```typescript
import { createClient } from '@minions-bundles-execution/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_bundles_execution import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
minions-bundles-execution info
```
