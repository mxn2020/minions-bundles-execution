"""
Minions Bundle: Execution Python SDK

Granular task management and daily tracking bundle — sprints, tasks, blockers
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Bundle: Execution.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
